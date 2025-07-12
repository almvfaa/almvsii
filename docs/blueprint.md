# **App Name**: SII Almacén de Víveres Faa

## Core Features:

- Role-Based Dashboards: Role-based dashboards for Dietology, Warehouse, Legal, Supplier, and Admin, each providing access to role-specific functions and information.
- Menu Planner: Menu Planner module for Dietology to create and manage menu templates (breakfast, lunch, dinner), specifying serving department and associated pathology.
- Inventory Control: Inventory Control module for the Warehouse to manage stock, record entries from suppliers (linked to purchase orders), record exits to hospital departments, and record returns to suppliers, specifying the reason.
- Schedule Consolidation: Automated consolidation of individual Dietology monthly schedules into a master schedule for the Warehouse.
- Return Notification: Automatic notifications to the relevant Supplier and Legal roles upon registration of a return (devolucion) by the Warehouse, initiating the warranty process; A tool that will determine the content of such notification depending on context of devolucion.
- Contract Management: Contract Management CRUD for Legal to manage contracts with suppliers, upload contract and bidding documents, and define awarded products and their prices.
- Automated Penalty: Automated creation of a document in the 'breaches' collection with the type 'delivery_delay' when the Warehouse registers a delivery with a date later than scheduled; a tool that will calculate the number of days of delay.
- Admin User Role: Admin user role with access to all functionalities and data across the application, for comprehensive oversight and management.

## Style Guidelines:

- Primary color: Soft, muted green (#A7D1AB), reminiscent of hospital environments, yet still fresh and calming.
- Background color: Very light green (#F0FAF2), almost white, to create a clean and professional interface.
- Accent color: A gentle yellow (#E8CA8F) for highlighting important elements and CTAs, adding a touch of warmth.
- Body and headline font: 'Inter', a grotesque-style sans-serif for a modern, objective look, for both headlines and body text
- Use clear and simple icons that are easily recognizable, aiding in navigation and quickly conveying information related to logistics, food, and contracts.
- A dynamic and modern layout, prioritizing ease of navigation and data visualization for all user roles, incorporating responsive design principles.
- A clean, card-based layout for each dashboard to help keep information categorized by function.
- Use subtle animations for feedback. For instance, loading indicators, and confirmations upon actions.