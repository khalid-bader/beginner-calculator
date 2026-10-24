const form = document.querySelector('#form');
const result = document.querySelector('#result');
const message = document.querySelector('#message');
// دالة حساب مستقلة عن عناصر الواجهة، ليسهل فهمها وتجربتها.
function calculate(a, b, operation) {
  switch (operation) {
    case 'add': return a + b;
    case 'subtract': return a - b;
    case 'multiply': return a * b;
    case 'divide':
      if (b === 0) throw new Error('لا يمكن القسمة على صفر.');
      return a / b;
    default: throw new Error('اختر عملية صحيحة.');
  }
}
form.addEventListener('submit', e => {
  e.preventDefault(); result.textContent = '—'; message.textContent = '';
  const a = document.querySelector('#first').valueAsNumber;
  const b = document.querySelector('#second').valueAsNumber;
  if (!Number.isFinite(a) || !Number.isFinite(b)) { message.textContent = 'أدخل عددين صالحين.'; return; }
  try {
    const answer = calculate(a, b, document.querySelector('#operation').value);
    if (!Number.isFinite(answer)) throw new Error('النتيجة أكبر من المجال المدعوم.');
    result.textContent = new Intl.NumberFormat('en', {maximumSignificantDigits:12}).format(answer);
  } catch (error) { message.textContent = error.message; }
});
form.addEventListener('reset', () => { result.textContent = '—'; message.textContent = ''; });
