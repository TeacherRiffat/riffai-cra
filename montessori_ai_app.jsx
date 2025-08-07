// RiffAI – Montessori AI Assistant (React App)
// Built for Miss Riffat by Janan 💖

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function RiffAIApp() {
  const [promptType, setPromptType] = useState('lesson');
  const [topic, setTopic] = useState('');
  const [age, setAge] = useState('');
  const [output, setOutput] = useState('');

  const prompts = {
    lesson: (topic, age) => `Create a Montessori lesson plan for age group ${age} on the topic '${topic}', including materials, objectives, steps, and assessments.`,
    worksheet: (topic, age) => `Generate a printable worksheet for Montessori students aged ${age} on the topic '${topic}', using tracing, matching, and visuals.`,
    observation: (topic, age) => `Write an observation note for a Montessori child aged ${age}, showing difficulty in '${topic}', with suggestions for Montessori-based intervention.`,
    feedback: (topic, age) => `Generate weekly parent feedback for a child aged ${age}, highlighting growth in '${topic}' and suggest 2 simple home activities.`
  };

  const handleGenerate = () => {
    const prompt = prompts[promptType](topic, age);
    setOutput(prompt); // This is where OpenAI integration can go later
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-6">🌸 Welcome to RiffAI – Montessori Assistant</h1>
      <Card className="mb-4">
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">Select Function</label>
              <select value={promptType} onChange={e => setPromptType(e.target.value)} className="w-full p-2 border rounded">
                <option value="lesson">🗓️ Lesson Plan</option>
                <option value="worksheet">🧩 Worksheet</option>
                <option value="observation">📝 Observation Note</option>
                <option value="feedback">👪 Parent Feedback</option>
              </select>
            </div>
            <div>
              <label className="font-semibold">Age Group</label>
              <Input value={age} onChange={e => setAge(e.target.value)} placeholder="e.g. 3-4" />
            </div>
          </div>
          <div>
            <label className="font-semibold">Topic / Area of Focus</label>
            <Input value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. Shapes, Phonics, Cutting Skills" />
          </div>
          <Button onClick={handleGenerate} className="w-full bg-pink-600 text-white hover:bg-pink-700">✨ Generate Prompt</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <label className="font-semibold">Generated Prompt</label>
          <Textarea rows={6} value={output} readOnly className="mt-2" />
        </CardContent>
      </Card>
    </div>
  );
}
