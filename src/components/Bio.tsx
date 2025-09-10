
import React from 'react';

export function Bio() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <img
              src="images/David-Ma-Actor-Headshot.jpg"
              alt="David Ma"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-8 text-gray-800 text-lg leading-relaxed">
            <p>
              <span className="font-medium">David Ma</span> is an actor who doesn't just <em>step</em> into a role - he dives in, rolls, 
              sprints and sometimes sword-fights his way through it. Based in New York, 
              David is a versatile stage, screen, stunt and voice performer with a range 
              that spans sketch comedy to Shakespeare, indie film to martial arts 
              choreography. He's fluent in <span className="font-medium">Japanese</span> and <span className="font-medium">Chinese</span>, conversational in 
              <span className="font-medium"> Korean</span>, and eligible to work in <span className="font-medium">U.S.</span>, <span className="font-medium">Canada</span> and <span className="font-medium">Japan</span>.
            </p>
            
            <p>
              His film work includes leading performances in acclaimed short films like 
              <em> Fumakase</em> and <em>Translation</em>, where he brought both dramatic weight and 
              multilingual fluency to the screen. On stage, he's a regular in <em>A Sketch of 
              New York</em>, the city's longest-running sketch comedy show, and took on both 
              acting and stunt duties as <span className="font-medium">Titus</span> in <em>Julius Caeser</em> produced by Hudson 
              Classical Theater Company.
            </p>
            
            <p>
              As a voice actor, David has voiced for national campaigns such as <em>2021 
              Canadian federal elections</em> and as a moderator for industry panels at <em>Soho 
              International Film Festival (SIFF)</em> and <em>Hudson International Film Festival (HIFF)</em>
              - earning <span className="font-medium">Best Moderator</span> honors in 2023.
            </p>
            
            <p>
              Before he was jumping off platforms or swinging sabers, David was a 
              competitive sprinter with over a decade of experience in the <span className="font-medium">200m and 
              400m</span>, regularly placing in top finals. He now channels that same discipline 
              into <span className="font-medium">Boxing</span>, <span className="font-medium">Muay Thai</span>, and <span className="font-medium">Brazilian Jiu-Jitsu</span>, and <span className="font-medium">stunt</span> training.
            </p>
            
            <p>
              Off set, David stays busy studying Korean, training regularly in acting and 
              singing, and connecting with his growing online audience through <span className="font-medium">YouTube</span>{" "}
              and <span className="font-medium">TikTok</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}