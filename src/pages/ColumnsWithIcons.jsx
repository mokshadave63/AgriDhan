import React from "react";

function ColumnsWithIcons() {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Columns with icons</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 py-5">
        <div className="col d-flex align-items-start">
          <svg
            className="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlinkHref="#bootstrap" />
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We’ll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="btn btn-primary btn-sm">
              Call to action
            </a>
          </div>
        </div>

        <div className="col d-flex align-items-start">
          <svg
            className="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlinkHref="#bootstrap" />
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
            <p>
              Another paragraph of text beneath the heading. Keep going until
              we run out of words.
            </p>
            <a href="#" className="btn btn-primary btn-sm">
              Call to action
            </a>
          </div>
        </div>

        <div className="col d-flex align-items-start">
          <svg
            className="bi text-body-secondary flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlinkHref="#bootstrap" />
          </svg>
          <div>
            <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
            <p>
              Another paragraph of text beneath the heading. Keep going until
              we run out of words.
            </p>
            <a href="#" className="btn btn-primary btn-sm">
              Call to action
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColumnsWithIcons;
