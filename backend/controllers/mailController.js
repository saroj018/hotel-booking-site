// const nodemailer=require('nodemailer')

// export const sendMail=async(req,resp)=>{
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'ari.jacobi@ethereal.email',
//           pass: '1ys7spymq6CRuEtZDr'
//         }
//       });
//       const mailOptions = {
//         from: 'youremail@mail.com',
//         to: 'ari.jacobi@ethereal.email',
//         subject: 'Your email title here',
//         text: 'your email body content here',
//         //html: `
//         //  <h1>Sample Heading Here</h1>
//         //  <p>message here</p>
//         //`,
//         attachments: [
//           {
//             filename: 'image.png',
//             path: '<https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png>'
//           }
//         ]
//       };
      
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//           return resp.json(info)
//         }
//       });
// }