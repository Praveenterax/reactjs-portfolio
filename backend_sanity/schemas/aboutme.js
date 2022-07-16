export default {
  name: "aboutme",
  title: "About Me",
  type: "document",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
      options: {
        accept: "application/pdf",
      },
    },
  ],
};
