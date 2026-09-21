// The only module that knows how contact messages are delivered. Swapping Web3Forms for another provider
// means changing this file alone; the form component just calls sendContactMessage().

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

// Web3Forms access keys are designed to be public: they only allow sending to the inbox they were issued for.
const WEB3FORMS_ACCESS_KEY = '8ad5be9b-7b98-4120-a6a7-6d49b8673731';

// Resolves to { success, message } so callers never depend on the provider's raw response shape.
export async function sendContactMessage(formData) {
  formData.append('access_key', WEB3FORMS_ACCESS_KEY);

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();

  if (!data.success) console.log('Error', data);
  return { success: data.success, message: data.message };
}
