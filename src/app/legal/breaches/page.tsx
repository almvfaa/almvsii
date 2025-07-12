import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function BreachesPage() {
  const breaches = [
    {
      id: 'BR-001',
      contractId: 'CTR-001',
      title: 'Late Delivery from Supplier Inc.',
      date: '2023-09-15',
      status: 'Resolved',
      details: 'Supplier failed to meet the delivery deadline stipulated in the agreement. A penalty was applied as per section 5.2 of the contract.'
    },
    {
      id: 'BR-002',
      contractId: 'CTR-002',
      title: 'Service Downtime Exceeded SLA',
      date: '2024-01-20',
      status: 'Under Investigation',
      details: 'Client Corp reported a service downtime of 4 hours, exceeding the 99.9% uptime guaranteed in the SLA. We are currently verifying the claim.'
    },
     {
      id: 'BR-003',
      contractId: 'CTR-001',
      title: 'Incorrect Goods Delivered',
      date: '2024-03-05',
      status: 'Action Required',
      details: 'Supplier Inc. delivered the wrong product specification. A formal complaint has been filed and a return process initiated.'
    },
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Contract Breaches</h1>
      <Card>
        <CardHeader>
          <CardTitle>Breach Incidents</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {breaches.map(breach => (
              <AccordionItem value={breach.id} key={breach.id}>
                <AccordionTrigger>
                  <div className="flex justify-between w-full pr-4">
                    <span>{breach.title} (Contract: {breach.contractId})</span>
                    <Badge variant={
                      breach.status === 'Resolved' ? 'default' :
                      breach.status === 'Under Investigation' ? 'secondary' : 'destructive'
                    }>
                      {breach.status}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2"><strong>Date of Incident:</strong> {breach.date}</p>
                  <p>{breach.details}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
