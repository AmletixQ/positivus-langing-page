import "./Accordion.scss";
import AccordionItem from "./AccordionItem/AccordionItem";

interface AccordionItem {
  title: string;
  summary: string;
  status: boolean;
}

const items: AccordionItem[] = [
  {
    title: "Consultation",
    summary:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    status: true,
  },
  {
    title: "Research and Strategy Development",
    summary:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    status: false,
  },
  {
    title: "Implementation",
    summary:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    status: false,
  },
  {
    title: "Monitoring and Optimization",
    summary:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    status: false,
  },
  {
    title: "Reporting and Communication",
    summary:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    status: false,
  },
  {
    title: "Continual Improvement",
    summary:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    status: false,
  },
];

const Accordion = () => {
  return (
    <div className="accordion-container">
      {items.map((item, idx) => (
        <AccordionItem key={idx} order={idx + 1} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
