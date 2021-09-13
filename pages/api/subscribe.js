export default async function subscribe(req, res) {
  if (req.method === 'POST') {
    const subscriber = req.body
    console.log(subscriber)
    //* Get environment variables
    //@ MailChimp API Key
    const apiKey = process.env.MC_API_KEY
    //@ Mail Chimp API URL Root
    const apiRoot = process.env.MC_API_ROOT
    //@ TSM's Mail Chimp List ID
    const listId = process.env.MC_TSM_LIST_ID
    //* Build the Mail Chimp Subscribe API route
    const urlMC = `${apiRoot}lists/${listId}`
    console.log(urlMC)
    const subscriberData = JSON.stringify({
      members: [
        {
          email_address: subscriber.subscriberEmail,
          merge_fields: {
            NAME: subscriber.subscriberName,
          },
          status: 'subscribed',
        },
      ],
      update_existing: true,
    })
    //? API Key already converted to base64 for Mail Chimp: https://www.youtube.com/watch?v=Rzlop3Bgk1Q
    const headersMC = {
      Authorization: `Basic ${apiKey}`,
      'Content-Type': 'application/json',
    }

    const requestOptions = {
      method: 'POST',
      headers: headersMC,
      body: subscriberData,
    }

    await fetch(
      'https://us14.api.mailchimp.com/3.0/lists/d31709f97e',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }
}

// res.json({
//   status: 'Success',
//   Email: subscriber.subscriberEmail,
//   Name: subscriber.subscriberName,
// })
