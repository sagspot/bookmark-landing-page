import React from 'react';

const faqs = [
  {
    id: 1,
    qtn: 'What is Bookmark?',
    ans:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
  },
  {
    id: 2,
    qtn: 'How can I request a new browser?',
    ans:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    id: 3,
    qtn: 'Is there a mobile app?',
    ans:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
  },
  {
    id: 4,
    qtn: 'What about other Chromium browsers?',
    ans:
      'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
  },
];

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <h2> Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <div className="faqs__articles">
          {faqs.map((faq) => {
            const { id, qtn, ans } = faq;
            const handleClick = (e) => {
              const item = e.currentTarget.parentElement;
              item.classList.toggle('open');
            };
            return (
              <div className="faqs__article " key={id}>
                <div
                  className="faqs__qtn flex ai-c jc-sb"
                  onClick={handleClick}
                >
                  <div className="faqs__qtn--text">{qtn}</div>
                  <span className="faqs__qtn--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                    >
                      <path
                        fill="none"
                        stroke="#5267DF"
                        strokeWidth="3"
                        d="M1 1l8 8 8-8"
                      />
                    </svg>
                  </span>
                </div>
                <div className="faqs__ans">{ans}</div>
              </div>
            );
          })}
        </div>
        <a href="#" className="btn">
          More Info
        </a>
      </div>
    </section>
  );
};

export default FAQs;
