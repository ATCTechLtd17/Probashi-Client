import { useCallback, useEffect } from 'react';
import { toPng } from 'html-to-image';
import { PDFDocument } from 'pdf-lib';
import { toast } from 'react-hot-toast';

export const useCVActions = () => {
    const PAGE_MARGINS = {
        top: 15, // 30mm top margin
        bottom: 10, // 25mm bottom margin
        left: 10, // 20mm left margin
        right: 10, // 20mm right margin
      };
  // Set up print styles when component mounts
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
       @page {
        size: A4 portrait;
        margin: ${PAGE_MARGINS.top}mm ${PAGE_MARGINS.right}mm ${PAGE_MARGINS.bottom}mm ${PAGE_MARGINS.left}mm;
        bleed: 1mm;
      }
      
      @media print {
        html, body {
          width: 210mm;
          height: 297mm;
          background: #fff !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
          font-family: Times New Roman;
        }

        .cv-container {
          padding: ${PAGE_MARGINS.top}mm ${PAGE_MARGINS.right}mm ${PAGE_MARGINS.bottom}mm ${PAGE_MARGINS.left}mm !important;
            text-align: justify;
        }

        /* Other print styles remain the same */
        body * {
          visibility: hidden;
        }

        .cv-container,
        .cv-container * {
          visibility: visible;
        }

        .cv-container {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          margin: 0 !important;
          box-shadow: none !important;
        }

        .print\\:hidden,
        button,
        .toast-container {
          display: none !important;
        }

        .section-break {
          break-before: page;
          padding-top: ${PAGE_MARGINS.top}mm;
        }

        .no-break {
          break-inside: avoid;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Enhanced print functionality with options
  const handlePrint = useCallback(async () => {
    toast.promise(
      (async () => {
        try {
          // Store current scroll position
          const scrollPos = window.scrollY;

          // Set print-specific properties
          const printOptions = {
            scale: 1,
            margins: {
              top: '15mm',
              bottom: '15mm',
              left: '10mm',
              right: '10mm'
            },
            background: true
          };

          // Prepare document for printing
          document.documentElement.classList.add('print-mode');
          window.scrollTo(0, 0);

          // Call the print dialog with custom options
          const mediaQueryList = window.matchMedia('print');
          mediaQueryList.addListener(() => {
            // Reset after print dialog closes
            document.documentElement.classList.remove('print-mode');
            window.scrollTo(0, scrollPos);
          });

          await new Promise((resolve) => {
            window.print();
            setTimeout(resolve, 500); // Give time for print dialog to open
          });

          return 'success';
        } catch (error) {
          console.error('Print error:', error);
          throw error;
        }
      })(),
      {
        loading: 'Preparing print view...',
        success: 'Ready to print!',
        error: 'Failed to prepare print view'
      }
    );
  }, []);

   // Updated download handler with proper page capture
  const handleDownload = useCallback(async (contentRef, fileName = 'CV.pdf') => {
    if (!contentRef.current) return;

    toast.promise(
      (async () => {
        try {
          const node = contentRef.current;
          
          // Temporarily modify the container for better capture
          const originalStyle = node.style.cssText;
          node.style.width = '210mm';
          node.style.margin = '0mm';
          node.style.padding = '20mm 15mm';
          node.style.backgroundColor = 'white';
          
          // Get the full height of the content
          const contentHeight = node.scrollHeight;
          const contentWidth = node.scrollWidth;
          
          // Convert to PNG with proper dimensions
          const pngData = await toPng(node, {
            quality: 1,
            pixelRatio: 2,
            width: contentWidth,
            height: contentHeight,
            style: {
              transform: 'scale(1)',
              transformOrigin: 'top left',
              width: '210mm',
              minHeight: contentHeight + 'px'
            },
            filter: (node) => {
              // Filter out elements that shouldn't be in the PDF
              return !node.classList?.contains('print:hidden');
            }
          });

          // Restore original styles
          node.style.cssText = originalStyle;

          // Create PDF with proper dimensions
          const pdfDoc = await PDFDocument.create();
          
          // Calculate how many pages we need
          const a4Height = 841.89; // A4 height in points
          const a4Width = 595.28;  // A4 width in points
          const contentRatio = contentHeight / contentWidth;
          const totalHeight = a4Width * contentRatio;
          const numberOfPages = Math.ceil(totalHeight / a4Height);

          // Add the image to PDF, possibly spanning multiple pages
          const pngImage = await pdfDoc.embedPng(pngData);
          const scaledWidth = a4Width;
          const scaledHeight = totalHeight;

          for (let i = 0; i < numberOfPages; i++) {
            const page = pdfDoc.addPage([a4Width, a4Height]);
            
            // Calculate which portion of the image to show on this page
            const yOffset = i * a4Height;
            
            page.drawImage(pngImage, {
              x: 0,
              y: a4Height - (scaledHeight - yOffset),
              width: scaledWidth,
              height: scaledHeight,
              clip: {
                x: 0,
                y: yOffset,
                width: scaledWidth,
                height: Math.min(a4Height, scaledHeight - yOffset)
              }
            });
          }

          // Save and download the PDF
          const pdfBytes = await pdfDoc.save();
          const blob = new Blob([pdfBytes], { type: 'application/pdf' });
          const url = URL.createObjectURL(blob);
          
          const link = document.createElement('a');
          link.href = url;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);

          return 'success';
        } catch (error) {
          console.error('Error generating PDF:', error);
          throw error;
        }
      })(),
      {
        loading: 'Generating PDF...',
        success: 'PDF downloaded successfully!',
        error: 'Failed to generate PDF'
      }
    );
  }, []);

  return { handlePrint, handleDownload };
};