
import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import { Bell } from "lucide-react";
import NotificationPanel from "@/components/dashboard/NotificationPanel";

const NotificationsPage = () => {
  return (
    <>
      <Helmet>
        <title>Notifications | Track Flow</title>
      </Helmet>
      <MainLayout showSidebar={true}>
        <div className="container px-4 mx-auto py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Notificações</h1>
              <p className="text-muted-foreground">
                Visualize todas as notificações e alertas do sistema
              </p>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm p-6">
            <NotificationPanel fullPage={true} />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default NotificationsPage;
