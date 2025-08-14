import React from 'react';

import config from '../config/index.json';

const CaseStudies = () => {
  const { caseStudies } = config;
  const { title, items: caseStudiesList } = caseStudies;

  return (
    <div className={`py-12 bg-background`} id="caseStudies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            Case Studies
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-16">
            {caseStudiesList.map((caseStudy) => (
              <div key={caseStudy.title} className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary bg-opacity-10 text-primary`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
