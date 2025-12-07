function showWriteup(challenge) {
  const writeups = {
    "pwn101": `
      <h3>[pwn101]</h3>
      <p><b>Category:</b> pwn & binary exploitation</p>
      <p><b>Writeup:</b> Welcome to my classic pwn101 challenge writeup!<br>
      Here I solved a simple buffer overflow in a protected binary. <br>
      <code>
        python -c 'print("A"*112 + "\xef\xbe\xad\xde")' | ./vuln
      </code>
      <br>More details and step-by-step coming soon! 🚩
      </p>
    `
    // Add more writeup content objects here!
  };
  const modal = document.getElementById('writeup-modal');
  modal.classList.remove('hidden');
  document.getElementById('writeup-details').innerHTML = writeups[challenge];
}
function closeModal() {
  document.getElementById('writeup-modal').classList.add('hidden');
}