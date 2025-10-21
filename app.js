// app.js
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.dataset.section;
    document.querySelectorAll('main section').forEach(section => {
      section.hidden = section.id !== sectionId;
    });
  });
});

// Example PDF Generation with jsPDF
document.getElementById('downloadFinancials').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text('Mangrove Systems Ltd. – Corporate Filing (Fictional)', 10, 10);
  doc.text('Filing Date: 31 October 2027', 10, 20);
  doc.text('Financial Summary:', 10, 30);
  doc.text('Net Income: £2,843.0M', 10, 40);
  doc.text('Depreciation & Amortization: £611.4M', 10, 50);
  doc.text('...', 10, 60); // Continue adding details as needed

  doc.save('financials.pdf');
});