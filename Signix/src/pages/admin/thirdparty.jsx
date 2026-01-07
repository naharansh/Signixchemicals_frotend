import { Sidebar } from "../../components/sidebar";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { OrderList } from "./orderList";
import {
  MailConfig,
  Maps,
  PushNotification,
  Recapcha,
  SMSCONFIG,
} from "./smsconfig";

export const ThirdParty = () => {
  return (
    <>
      <Sidebar>
        <div className="w-full py-4">
          <Card className="rounded-none border border-none shadow-sm">
            <CardContent className="p-6 space-y-8">
              {/* Header */}
              <div className="space-y-1">
                <h1 className="text-xl font-semibold text-foreground">
                  Third-Party Integrations
                </h1>
                <p className="text-sm text-muted-foreground">
                  Manage and configure external services connected to your
                  account
                </p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="smsconfig" className="w-full">
                <TabsList className="flex w-full flex-wrap gap-2 rounded-lg bg-muted p-1">
                  <TabsTrigger value="smsconfig" className="flex-1">
                    SMS Config
                  </TabsTrigger>
                  <TabsTrigger value="mailconfig" className="flex-1">
                    Mail Config
                  </TabsTrigger>
                  <TabsTrigger value="Recaptca" className="flex-1">
                    reCAPTCHA
                  </TabsTrigger>
                  <TabsTrigger value="maps" className="flex-1">
                    Google Maps
                  </TabsTrigger>
                  <TabsTrigger value="notefication" className="flex-1">
                    Push Notifications
                  </TabsTrigger>
                </TabsList>

                {/* Tab Contents */}
                <div className="mt-6 rounded-lg border bg-background p-4">
                  <TabsContent value="smsconfig">
                    <SMSCONFIG />
                  </TabsContent>

                  <TabsContent value="mailconfig">
                    <MailConfig />
                  </TabsContent>

                  <TabsContent value="Recaptca">
                    <Recapcha />
                  </TabsContent>

                  <TabsContent value="maps">
                    <Maps />
                  </TabsContent>

                  <TabsContent value="notefication">
                    <PushNotification />
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </Sidebar>
    </>
  );
};
