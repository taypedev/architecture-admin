"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Settings, User, Mail, Phone, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function TabsContentPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6 font-roboto uppercase">
        Casos de Uso - Tabs
      </h1>

      <article className="flex flex-col gap-4 flex-wrap md:flex-row">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold font-lato">Tabs básicos</h2>
          </CardHeader>
          <CardContent>
            <BasicTabs />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold font-lato">Tabs con iconos</h2>
          </CardHeader>
          <CardContent>
            <IconTabs />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold font-lato">Tabs verticales</h2>
          </CardHeader>
          <CardContent>
            <VerticalTabs />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold font-lato">
              Tabs con contenido de tarjetas
            </h2>
          </CardHeader>
          <CardContent>
            <ContentCardTabs />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold font-lato">
              Responsive Tabs (Accordion on Mobile)
            </h2>
          </CardHeader>
          <CardContent>
            <ResponsiveTabs />
          </CardContent>
        </Card>
      </article>
    </>
  );
}

function BasicTabs() {
  return (
    <Tabs defaultValue="tab1" className="w-full">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  );
}

function IconTabs() {
  return (
    <Tabs defaultValue="home" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="home">
          <Home className="mr-2 h-4 w-4" />
          Home
        </TabsTrigger>
        <TabsTrigger value="profile">
          <User className="mr-2 h-4 w-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">Home content</TabsContent>
      <TabsContent value="profile">Profile content</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
    </Tabs>
  );
}

function VerticalTabs() {
  return (
    <Tabs defaultValue="tab1" className="flex flex-col sm:flex-row">
      <TabsList className="flex-col h-full justify-start sm:w-[200px]">
        <TabsTrigger value="tab1" className="justify-start">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="justify-start">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3" className="justify-start">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <div className="mt-4 sm:mt-0 sm:ml-4 flex-1">
        <TabsContent value="tab1">Content for Tab 1</TabsContent>
        <TabsContent value="tab2">Content for Tab 2</TabsContent>
        <TabsContent value="tab3">Content for Tab 3</TabsContent>
      </div>
    </Tabs>
  );
}

function ContentCardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Summary of your account activity</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Here an overview of your account...</p>
          </CardContent>
          <CardFooter>
            <Button>View Details</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Detailed analytics of your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Here are your analytics...</p>
          </CardContent>
          <CardFooter>
            <Button>Export Data</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Generated reports for your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Your reports are listed here...</p>
          </CardContent>
          <CardFooter>
            <Button>Generate New Report</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

function ResponsiveTabs() {
  const [activeTab, setActiveTab] = useState("email");
  const tabs = [
    {
      id: "email",
      label: "Email",
      icon: Mail,
      content: "Manage your email settings",
    },
    {
      id: "phone",
      label: "Phone",
      icon: Phone,
      content: "Manage your phone settings",
    },
    {
      id: "profile",
      label: "Profile",
      icon: User,
      content: "Update your profile information",
    },
  ];

  return (
    <div className="w-full">
      <div className="sm:hidden">
        {tabs.map((tab) => (
          <Collapsible key={tab.id}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 font-medium text-left bg-muted hover:bg-muted/80 rounded-lg">
              <div className="flex items-center">
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </div>
              <ChevronDown className="w-4 h-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              {tab.content}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
      <div className="hidden sm:block">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
