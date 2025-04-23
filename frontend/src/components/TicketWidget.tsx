export function TicketWidget() {
  return (
    <div>
      {/* <div className="tt-widget">
        <div className="tt-widget-fallback">
          <p>
            <a
              href="https://www.tickettailor.com/all-tickets/forroliverpool/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
              target="_blank"
            >
              Click here to buy tickets
            </a>
            <br />
            <small>
              <a
                href="https://www.tickettailor.com?rf=wdg_171315"
                className="tt-widget-powered"
              >
                Sell tickets online with Ticket Tailor
              </a>
            </small>
          </p>
        </div>
        <Script
          src="https://cdn.tickettailor.com/js/widgets/min/widget.js"
          data-url="https://www.tickettailor.com/all-tickets/forroliverpool/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
          data-type="inline"
          data-inline-minimal="true"
          data-inline-show-logo="false"
          data-inline-bg-fill="false"
          data-inline-inherit-ref-from-url-param=""
          data-inline-ref="website_widget"
        ></Script>
      </div> */}

      <iframe
        src="https://www.tickettailor.com/all-tickets/forroliverpool/rtne/1/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
        width="100%"
        height="800"
        title="Ticket Widget"
        style={{
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
}
