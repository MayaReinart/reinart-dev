import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Mail, FileText } from "lucide-react";
import { GitHubIcon } from "./icons";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Maya Reinart</h1>
        <p className="text-sm text-gray-600">Backend Developer | Python | AI Integration</p>
        <div className="flex gap-4 mt-2">
          <a href="mailto:mayareinart@gmail.com" className="text-blue-600 hover:underline flex items-center gap-1">
            <Mail size={16} /> mayareinart@gmail.com
          </a>
          <a href="https://github.com/mayareinart" target="_blank" className="text-blue-600 hover:underline flex items-center gap-1">
            <GitHubIcon className="h-4 w-4" /> GitHub
          </a>
          <a href="/cv" className="text-blue-600 hover:underline flex items-center gap-1">
            <FileText size={16} /> CV
          </a>
        </div>
      </header>

      <Tabs defaultValue="intro" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="intro">About</TabsTrigger>
          <TabsTrigger value="introspect">API Introspection</TabsTrigger>
          <TabsTrigger value="focus">Focus Dashboard</TabsTrigger>
        </TabsList>

        <TabsContent value="intro">
          <Card>
            <CardContent className="p-4">
              <p>
                I&apos;m a backend developer with a focus on Python, FastAPI, and clean, maintainable architecture.
                This is a minimal, expanding portfolio of practical tools I&apos;ve built, showcasing not just code, but
                product thinking, system design, and real-world use cases.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="introspect">
          <Card>
            <CardContent className="p-4">
              <p>
                A tool for introspecting your OpenAI-based APIs. It extracts and analyzes API structure, prompt
                flows, and model usage, offering dev-friendly summaries.
              </p>
              <Button className="mt-4" asChild>
                <a href="https://introspect.reinart.dev" target="_blank">Launch Introspect</a>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="focus">
          <Card>
            <CardContent className="p-4">
              <p>
                [Placeholder] An experimental developer dashboard focused on tracking focus time, decision fatigue,
                and flow interruptions. More soon.
              </p>
              <Button className="mt-4" variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
