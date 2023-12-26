// pages/physiotherapists/[slug].tsx

import { groq } from "next-sanity";
import { getClient } from "lib/sanity.client";
import {
  Physiotherapist,
  physiotherapistBySlugQuery,
  License,
  WorkExperience,
  Education,
} from "lib/sanity.queries";
import RootLayout from "app/layout";




type Props = {
  physiotherapist: Physiotherapist;
};

export default function PhysiotherapistPage({ physiotherapist }: Props) {
  // Render physiotherapist page
  return (
    <RootLayout>
      <PhysioName name={physiotherapist.name} />
      <PhysioEmail email={physiotherapist.email} />
      <PhysioPhone phone={physiotherapist.phone} />

      <PhysioEducation education={physiotherapist.education} />

      <PhysioWorkExperience
        workExperience={physiotherapist.workExperience}
      />

      <PhysioLicenses licenses={physiotherapist.licenses} />
    </RootLayout>
  );
}

export async function getStaticPaths() {
  const slugs = await getClient().fetch(physiotherapistBySlugQuery);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const physiotherapist = await getClient().fetch(
    physiotherapistBySlugQuery,
    { slug: params.slug }
  );

  return {
    props: {
      physiotherapist
    }
  };
} 

// components/PhysiotherapistPageComponents.tsx

interface PhysioHeaderProps {
  // no props needed  
}

export function PhysioHeader(props: PhysioHeaderProps) {
  return <h1>Physiotherapist Page</h1>;
}

interface PhysioTitleProps {
  title: string;
}
interface PhysioNameProps {
  name: string;
}

function PhysioName({ name }: PhysioNameProps) {
  return <h1>{name}</h1>;
}

interface PhysioEmailProps {
  email: string;
}

function PhysioEmail({ email }: PhysioEmailProps) {
  return <p>Email: {email}</p>;
}

interface PhysioPhoneProps {
  phone: string;
}

function PhysioPhone({ phone }: PhysioPhoneProps) {
  return <p>Phone: {phone}</p>;
}

interface PhysioEducationProps {
  education: Education[];
}

function PhysioEducation({ education }: PhysioEducationProps) {
  return (
    <div>
      <h2>Education</h2>
      {education.map(edu => (
        <div key={edu._id}>
          <p>{edu.institution}</p>
          <p>{edu.area}</p>
          <p>
            {edu.startDate} - {edu.endDate}
          </p>
        </div>
      ))}
    </div>
  );
}

interface PhysioWorkExperienceProps {
  workExperience: WorkExperience[];
}

function PhysioWorkExperience({ workExperience }: PhysioWorkExperienceProps) {
  return (
    <div>
      <h2>Work Experience</h2>
      {workExperience.map(exp => (
        <div key={exp._id}>
          <p>{exp.company}</p>
          <p>{exp.position}</p>
          <p>
            {exp.startDate} - {exp.endDate}
          </p>
        </div>
      ))}
    </div>
  );
}

interface PhysioLicensesProps {
  licenses: License[];
}

function PhysioLicenses({ licenses }: PhysioLicensesProps) {
  return (
    <div>
      <h2>Licenses & Certifications</h2>
      {licenses.map(license => (
        <div key={license._id}>
          <p>{license.licenseType}</p>
          <p>{license.licensingBody}</p>
          <p>{license.licenseNumber}</p>
        
        </div>
      ))}
    </div>
  );
}