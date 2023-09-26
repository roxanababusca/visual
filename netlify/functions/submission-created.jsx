const API_KEY = process.env.MAILERLITE_PRODUCTION_API_KEY;
const BASE_URL = process.env.MAILERLITE_PRODUCTION_BASE_API_URL;
const GROUP_ID = process.env.MAILERLITE_PRODUCTION_NEWSLETTER_GROUP_ID;


async function handler (event) {
  if (!event.body) {
    return;
  }

  const { email } = JSON.parse(event.body).payload;
  const url = `${BASE_URL}/subscribers`;

  const data = {
    email: email,
    groups: [`${GROUP_ID}`],
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
       Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    if (response.ok){
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Subscribe email sent',
      }),
    };
  } else {
    throw new Error('Unable to subscribe email');
  }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
}
export {handler};

