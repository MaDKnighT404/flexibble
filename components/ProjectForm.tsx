'use client';

import { SessionInterface } from '@/common.type';
import Image from 'next/image';
import React from 'react';
import FormField from './FormField';

export default function ProjectForm({
  type,
  session,
}: {
  type: string;
  session: SessionInterface;
}) {
  const handleFormSubmit = (e: React.FormEvent) => {};
  const handleChangeImage = (e: React.ChangeEvent) => {};

  const handleStateChange = (fieldName: string, value: string) => {};

  const form = {
    image: '',
    title: '',
  };

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form.image && 'choose a poster for your project'}
        </label>
        <input
          type="file"
          accept="image/"
          required={type === 'create'}
          className="form_image-input"
          onChange={handleChangeImage}
        />
        {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 object-contain z-20"
            alt="Project poster"
            fill
          />
        )}
      </div>

      <FormField
        title="Title"
        state={form.title}
        placeholder="Flexibble"
        setState={(value) => handleStateChange('title', value)}
      />

      <FormField
        title="Description"
        state={form.Description}
        placeholder="Showcase and discover remakable developer projects"
        setState={(value) => handleStateChange('description', value)}
      />

      <FormField
        type='url'
        title="Website URL"
        state={form.liveSiteURL}
        placeholder="https://jsmastery.pro"
        setState={(value) => handleStateChange('liveSiteUrl', value)}
      />

      <FormField
                type='url'
        title="GitHub URL"
        state={form.githubURL}
        placeholder="https://github.com/MaDKnighT404"
        setState={(value) => handleStateChange('githubURL', value)}
      />
      {/* custom inputs*/}
      <div className='flexStart w-full'>
        <button>Create</button>
      </div>
    </form>
  );
}
