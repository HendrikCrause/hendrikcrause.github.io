import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="min-w-72">
      <AccordionItem value="item-1">
        <AccordionTrigger className="gap-8">Question 1?</AccordionTrigger>
        <AccordionContent> Answer 1 </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="gap-8">Question 2?</AccordionTrigger>
        <AccordionContent> Answer 2 </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="gap-8">Question 3?</AccordionTrigger>
        <AccordionContent> Answer 3 </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="gap-8">Question 4?</AccordionTrigger>
        <AccordionContent> Answer 4 </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="gap-8">Question 5?</AccordionTrigger>
        <AccordionContent> Answer 5 </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
