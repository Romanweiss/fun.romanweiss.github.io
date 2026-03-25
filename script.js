const downloadBtn = document.getElementById("downloadPdfBtn");

if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    window.print();
  });
}
