
import React, { useState } from 'react';

export default function App() {
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
    setOutput(prompt);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ color: '#D63384' }}>🌸 RiffAI – Montessori Assistant</h1>
      <label>Select Function:</label>
      <select value={promptType} onChange={e => setPromptType(e.target.value)} style={{ width: '100%', padding: '8px' }}>
        <option value="lesson">🗓️ Lesson Plan</option>
        <option value="worksheet">🧩 Worksheet</option>
        <option value="observation">📝 Observation Note</option>
        <option value="feedback">👪 Parent Feedback</option>
      </select>
      <label>Age Group:</label>
      <input value={age} onChange={e => setAge(e.target.value)} placeholder="e.g. 3-4" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
      <label>Topic / Area of Focus:</label>
      <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. Shapes, Phonics, Cutting Skills" style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
      <button onClick={handleGenerate} style={{ width: '100%', padding: '10px', marginTop: '10px', backgroundColor: '#D63384', color: 'white' }}>✨ Generate Prompt</button>
      <textarea value={output} readOnly rows={6} style={{ width: '100%', marginTop: '10px', padding: '10px' }} />
    </div>
  );
}
