export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "bgColor",
      title: "BgColor",
      type: "string",
    },
    {
      name: "proficiency",
      title: "Proficiency",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    },

    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  initialValue: {
    bgColor: "#edf2f8",
    proficiency: 1,
  },
};
