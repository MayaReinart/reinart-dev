import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";
import { GitHubIcon } from "./icons";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-4 md:p-8 max-w-4xl mx-auto">
      {/* Contacts Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Maya Reinart</h1>
        <p className="text-sm text-gray-600 mb-4">Backend Developer | Python | AI Integration</p>
        <div className="flex flex-wrap gap-4">
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

      {/* CV Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <Card>
          <CardContent className="p-4">
            <p className="mb-4">
              I&apos;m a backend developer with a focus on Python, FastAPI, and clean, maintainable architecture.
              This is a minimal, expanding portfolio of practical tools I&apos;ve built, showcasing not just code, but
              product thinking, system design, and real-world use cases.
            </p>
            <Button asChild>
              <a href="/cv">View Full CV</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-medium mb-2">API Introspection Tool</h3>
              <p className="mb-4">
                A tool for introspecting your OpenAI-based APIs. It extracts and analyzes API structure, prompt
                flows, and model usage, offering dev-friendly summaries.
              </p>
              <Button variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-medium mb-2">Focus Dashboard</h3>
              <p className="mb-4">
                An experimental developer dashboard focused on tracking focus time, decision fatigue,
                and flow interruptions. More soon.
              </p>
              <Button variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
