import passportImage from "../assets/passport.jpeg";

export default {
  companyName: "Tijana Travel",
  pages: {
    home: {
      title: "Neki catchy phrase.",
      subtitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      blocks: [
        {
          type: {
            text: true
          },
          actions: {
            form: true
          },
          title: "Lorem, ipsum dolor.",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta optio saepe, distinctio pariatur nemo obcaecati, numquam amet nihil, rerum delectus debitis dicta accusantium cum aliquam laborum. Ipsum, optio tenetur."
        },
        {
          type: {
            image: true
          },
          src: passportImage
        }
      ],
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com"
      }
    }
  }
};
