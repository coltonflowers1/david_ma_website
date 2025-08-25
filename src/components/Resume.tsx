import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function Resume() {
  const handleDownloadPDF = () => {
    // Create a temporary link to trigger the download
    const link = document.createElement('a');
    link.href = '/ActingResumeMostRecent-38Yg7weDfS-cOwDeVh_gbA.pdf';
    link.download = 'David-Ma-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrintVersion = () => {
    window.print();
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Action buttons - don't print */}
        <div className="flex justify-end gap-4 mb-8 print:hidden">
          <Button 
            onClick={handleDownloadPDF}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>

        {/* Resume Content */}
        <div className="bg-white text-gray-900 leading-relaxed">
          {/* Header */}
          <div className="text-center border-b-2 border-gray-300 pb-6 mb-8">
            <h1 className="text-4xl font-medium mb-2">DAVID MA</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span>davidjma528@gmail.com</span>
              <span>•</span>
              <span>New York, NY</span>
              <span>•</span>
              <span>Height: 5'9"</span>
              <span>•</span>
              <span>Weight: 160 lbs</span>
            </div>
            <div className="mt-2 text-sm">
              <span>IMDb: https://www.imdb.com/name/nm16109998/</span>
            </div>
            <div className="mt-2 text-sm">
              <strong>Work Authorization:</strong> U.S., Canada, Japan
            </div>
          </div>

          {/* Film & Television */}
          <section className="mb-8">
            <h2 className="text-xl font-medium border-b border-gray-400 pb-1 mb-4">FILM & TELEVISION</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div>
                  <strong>Fumikaso</strong> - Lead Role
                </div>
                <div className="text-right">
                  <div>Independent Film</div>
                  <div className="text-sm text-gray-600">2024</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <strong>Translation</strong> - Lead Role
                </div>
                <div className="text-right">
                  <div>Independent Film</div>
                  <div className="text-sm text-gray-600">2023</div>
                </div>
              </div>
            </div>
          </section>

          {/* Theatre */}
          <section className="mb-8">
            <h2 className="text-xl font-medium border-b border-gray-400 pb-1 mb-4">THEATRE</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div>
                  <strong>Julius Caesar</strong> - Titus (Actor/Stunt Performer)
                </div>
                <div className="text-right">
                  <div>Hudson Classical Theater Company</div>
                  <div className="text-sm text-gray-600">2024</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <strong>A Sketch of New York</strong> - Ensemble/Regular Performer
                </div>
                <div className="text-right">
                  <div>NYC's Longest-Running Sketch Comedy</div>
                  <div className="text-sm text-gray-600">2022-Present</div>
                </div>
              </div>
            </div>
          </section>

          {/* Voice Over */}
          <section className="mb-8">
            <h2 className="text-xl font-medium border-b border-gray-400 pb-1 mb-4">VOICE OVER</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div>
                  <strong>2021 Canadian Federal Elections</strong> - Voice Actor
                </div>
                <div className="text-right">
                  <div>National Campaign</div>
                  <div className="text-sm text-gray-600">2021</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <strong>Film Festival Moderator</strong> - Panel Host
                </div>
                <div className="text-right">
                  <div>SIFF & HIFF</div>
                  <div className="text-sm text-gray-600">2023 - Best Moderator Award</div>
                </div>
              </div>
            </div>
          </section>

          {/* Training */}
          <section className="mb-8">
            <h2 className="text-xl font-medium border-b border-gray-400 pb-1 mb-4">TRAINING</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Acting & Performance</h3>
                <ul className="text-sm space-y-1">
                  <li>• Ongoing Acting Training</li>
                  <li>• Voice & Singing Lessons</li>
                  <li>• Stage Combat Certification</li>
                  <li>• Sketch Comedy Performance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Combat & Stunts</h3>
                <ul className="text-sm space-y-1">
                  <li>• Stage & Screen Combat</li>
                  <li>• Sword Fighting/Saber Work</li>
                  <li>• Martial Arts Choreography</li>
                  <li>• Stunt Performance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Special Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-medium border-b border-gray-400 pb-1 mb-4">SPECIAL SKILLS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Languages</h3>
                <ul className="text-sm space-y-1">
                  <li>• <strong>English:</strong> Native</li>
                  <li>• <strong>Japanese:</strong> Fluent</li>
                  <li>• <strong>Chinese:</strong> Fluent</li>
                  <li>• <strong>Korean:</strong> Conversational (Currently Studying)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Physical Skills</h3>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Combat Sports:</strong> Boxing, Muay Thai, Brazilian Jiu-Jitsu</li>
                  <li>• <strong>Athletics:</strong> Competitive Sprinting (200m/400m)</li>
                  <li>• <strong>Stunts:</strong> Falls, Rolls, Stage Combat</li>
                  <li>• <strong>Weapons:</strong> Sword Fighting, Saber Work</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Athletics Background */}
          <section className="mb-8">
            <h2 className="text-xl font-medium border-b border-gray-400 pb-1 mb-4">ATHLETICS</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <strong>Competitive Sprinting</strong> - 200m & 400m Specialist
                </div>
                <div className="text-right">
                  <div>10+ Years Experience</div>
                  <div className="text-sm text-gray-600">Regular Top Finals Placement</div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media */}
          <section className="mb-8">
            <h2 className="text-xl font-medium border-b border-gray-400 pb-1 mb-4">DIGITAL PRESENCE</h2>
            <div className="text-sm space-y-1">
              <div>• <strong>YouTube:</strong> Growing content creator</div>
              <div>• <strong>TikTok:</strong> Active social media presence</div>
              <div>• <strong>Online Portfolio:</strong> Regular content creation and audience engagement</div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="border-t border-gray-300 pt-6">
            <div className="text-xs text-gray-600 space-y-1">
              <div><strong>Note:</strong> Eligible to work in United States, Canada, and Japan</div>
              <div><strong>Location:</strong> Based in New York, willing to travel</div>
              <div><strong>Updated:</strong> January 2025</div>
            </div>
          </section>
        </div>
      </div>

      {/* Print styles using standard CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            body { font-size: 12px !important; }
            .print\\:hidden { display: none !important; }
            @page { margin: 0.5in; }
          }
        `
      }} />
    </div>
  );
}