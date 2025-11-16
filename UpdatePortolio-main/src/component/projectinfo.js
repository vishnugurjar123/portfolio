let projectsArray = [
  {
    imageLink:
      "data:image/png;base64,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",
    projectTittle: "Cashify-Project",
    projectDes:
    "User registration and login system using JSP and JDBC•Device price evaluation based on predefined conditions•MySQL database integration for storing user and transaction data•Admin dashboard to manage users and products •Responsive UI built with HTML and CSS",
    github: "https://github.com/vishnugurjar123/CashifyProject",
    projectLink: "https://vishnugurjar123.github.io/CashifyProject/",
  },
  {
    imageLink:
      "data:image/png;base64,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",
    projectTittle: "Banking-System-Terminal-Based",
    projectDes:
      "•Account Management: Open new accounts with unique customer details and account numbers.•Deposits & Withdrawals: Secure and real-time balance updates with validation checks.and Money Transfer:•Strengthened skills in Core Java, JDBC (PreparedStatement, ResultSet, Connection), and SQL queries.",
    github: "https://github.com/vishnugurjar123/Banking-System-Terminal-Based",
    projectLink: "https://github.com/vishnugurjar123/Banking-System-Terminal-Based",
  },
  {
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvoepvuPOUAdZrY-BKITIPcAjDxnVIgkXskA&usqp=CAU",
    projectTittle: "Tic-Tac-Toe",
    projectDes:
      "Tic tac toe is a 2 player game and we have made this using DOM manipulations and HTML , CSS and JS ",
    github: "https://github.com/jbmrgurjar/tic-toc-tac",
    projectLink: "https://vishnugurjar123.github.io/tic-toc-tac/",
  },

  {
    imageLink:
      "https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319_1280.png",
    projectTittle: "To-Do-List",
    projectDes:
      "I created a dynamic to-do list using HTML, CSS, and JavaScript. Simplify task management with an intuitive interface.",
    github: "https://github.com/jbmrgurjar/To-Do-List",
    projectLink: "https://vishnugurjar123.github.io/To-Do-List/",
  },

  {
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png",
    projectTittle: "Netflix-Clone",
    projectDes:
      "Portfolio includes a Netflix clone crafted with HTML and CSS, showcasing my frontend skills in recreating a modern and responsive user interface.",
    github: "https://github.com/jbmrgurjar/Netflix-Clone",
    projectLink: "https://vishnugurjar123.github.io/Netflix-Clone/",
  },
  {
    imageLink: "https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_640.png",
    projectTittle: "Youtube-Clone",
    projectDes: " YouTube clone using HTML and CSS involves designing a layout that mimics the look and feel of YouTube's user interface.",
    github: "https://github.com/jbmrgurjar/youtube-Clone",
    projectLink: "https://vishnugurjar123.github.io/youtube-Clone/",
  },
  {
    imageLink:
      "https://img.freepik.com/free-psd/3d-icon-weather-conditions-with-rain-sun_23-2150108737.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725321600&semt=ais_hybrid",
    projectTittle: "Weather-App ",
    projectDes:
      "Waether app  website using HTML, CSS, JavaScript, and Bootstrap for a responsive design. Integrated real-time weather  updates through APIs, providing users with the latest information. using fetch function ",
    github: "https://github.com/jbmrgurjar/Weather-project",
    projectLink: "https://vishnugurjar123.github.io/Weather-project/",
  },
  {
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodrRGCOcCpTi_7Wp-YAkweY54Uks-QHSFng&s",
    projectTittle: "Portfolio",
    projectDes: "Creating a portfolio using HTML, CSS, and JavaScript involves showcasing your skills, projects, and achievements in a structured and visually appealing way.",
    github: "https://github.com/jbmrgurjar/portfolio1",
    projectLink: "https://vishnugurjar123.github.io/portfolio1/",
  },
  {
    imageLink: "https://img.freepik.com/premium-psd/collection-art-pieces-wall_53876-65865.jpg",
    projectTittle: "Image-Gallery",
    projectDes: "image gallery using HTML, CSS, and JavaScript is a great way to showcase a collection of images in an organized and interactive manner.",
    github: "https://github.com/jbmrgurjar/Image-gallery",
    projectLink: "https://vishnugurjar123.github.io/Image-gallery/",
  },
  {
    imageLink: "https://media.istockphoto.com/id/133313561/photo/book-and-glass-loupe.jpg?s=612x612&w=0&k=20&c=c_-XUrih631ObxQA5ODY5mql_1PqEgfpQJXbG-qODPY=",
    projectTittle: "Dictionary-Project",
    projectDes: " dictionary project using HTML, CSS, JavaScript, and a dictionary API is a great way to practice working with APIs and building interactive web applications.",
    github: "https://github.com/jbmrgurjar/Dictionary-Project",
    projectLink: "https://vishnugurjar123.github.io/Dictionary-Project/",
  },
  {
    imageLink: "https://www.shutterstock.com/image-vector/vector-eps-concept-conceptual-abstract-260nw-150540287.jpg",
    projectTittle: "Radmon-text-generater",
    projectDes: "Radmon-text-generater  project using HTML, CSS, JavaScript, and a Radmon-text-generater API is a great way to practice working with APIs and building interactive web applications.",
    github: "https://github.com/jbmrgurjar/Radmon-text-generater-",
    projectLink: "https://vishnugurjar123.github.io/Radmon-text-generater-/",
  },
  {
    imageLink: "https://img.freepik.com/free-vector/modern-online-registration-compositio_23-2147993866.jpg",
    projectTittle: "Register-From",
    projectDes: "Registration form using HTML and CSS involves designing a form that collects user information, such as name, email, password, and other relevant details. ",
    github: "https://github.com/jbmrgurjar/register-From",
    projectLink: "https://vishnugurjar123.github.io/register-From/",
  },
  {
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWbe637bnPH-7bwa222V19jWV3RYZuwYxdw&s",
    projectTittle: "Login-Register",
    projectDes: "  Login and registration form with HTML and CSS is a great way to offer users both options on a single page.Build a basic layout that includes both a login and a registration form, along with the necessary CSS for styling.",
    github: "https://github.com/jbmrgurjar/login-register",
    projectLink: "https://vishnugurjar123.github.io/login-register/",
  },
];

export default projectsArray;
