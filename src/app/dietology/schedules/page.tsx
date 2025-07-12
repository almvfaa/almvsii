import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";

export default function SchedulesPage() {
  // This is a simplified representation. In a real app, you'd fetch this from a database.
  const appointments = {
    '2024-06-10': [{ time: '10:00 AM', client: 'John Doe', type: 'Initial Consultation' }],
    '2024-06-12': [{ time: '2:00 PM', client: 'Jane Smith', type: 'Follow-up' }],
    '2024-06-15': [
      { time: '11:00 AM', client: 'Peter Jones', type: 'Meal Plan Review' },
      { time: '3:00 PM', client: 'Mary Johnson', type: 'Initial Consultation' },
    ],
  };

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">Appointment Schedules</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-0">
              <Calendar
                mode="single"
                className="p-3"
                // In a real app, you would handle date selection and show appointments for the selected date
              />
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(appointments).map(([date, appts]) => (
                  <div key={date}>
                    <h3 className="font-semibold mb-2">{new Date(date).toLocaleDateString()}</h3>
                    <div className="space-y-2">
                      {appts.map(appt => (
                        <div key={appt.time} className="flex items-center justify-between p-2 border rounded-lg">
                          <div>
                            <p className="font-medium">{appt.client}</p>
                            <p className="text-sm text-muted-foreground">{appt.time}</p>
                          </div>
                          <Badge>{appt.type}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
