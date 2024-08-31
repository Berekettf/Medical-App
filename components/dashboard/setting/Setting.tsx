import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralSettings from "./GeneralSettings";
import { Component, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Setting() {
  const tabs = [
    {
      label: "General",
      value: "general",
      Component: <GeneralSettings />,
    },
    {
      label: "Security",
      value: "security",
      Component: <></>,
    },
    {
      label: "Integration",
      value: "integration",
      Component: <></>,
    },
    {
      label: "Support",
      value: "support",
      Component: <></>,
    },
    {
      label: "Organization",
      value: "organization",
      Component: <></>,
    },
    {
      label: "Advanced",
      value: "advanced",
      Component: <></>,
    },
  ];
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-6 md:gap-8">
      <Tabs defaultValue="general">
        <div className="flex items-center">
          <TabsList>
            {tabs.map((tab, i) => {
              return (
                <TabsTrigger key={i} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Product
              </span>
            </Button>
          </div>
        </div>
        {tabs.map((tab, i) => {
          return (
            <TabsContent key={i} value={tab.value}>
              {tab.Component}
            </TabsContent>
          );
        })}
      </Tabs>
    </main>
  );
}
