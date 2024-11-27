import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

export function FAQ() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Question 1?</AccordionTrigger>
        <AccordionContent> Answer 1 </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Question 2?</AccordionTrigger>
        <AccordionContent> Answer 2 </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Question 3?</AccordionTrigger>
        <AccordionContent> Answer 3 </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Question 4?</AccordionTrigger>
        <AccordionContent> Answer 4 </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Question 5?</AccordionTrigger>
        <AccordionContent> Answer 5 </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
