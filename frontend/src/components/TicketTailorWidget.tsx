import { Component } from 'react'

class TicketTailorWidget extends Component {
  componentDidMount() {
    // Create a script element
    const script = document.createElement('script')
    script.src = 'https://cdn.tickettailor.com/js/widgets/min/widget.js'
    script.setAttribute(
      'data-url',
      'https://www.tickettailor.com/all-tickets/forroliverpool/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true',
    )
    script.setAttribute('data-type', 'inline')
    script.setAttribute('data-inline-minimal', 'true')
    script.setAttribute('data-inline-show-logo', 'false')
    script.setAttribute('data-inline-bg-fill', 'false')
    script.setAttribute('data-inline-inherit-ref-from-url-param', '')
    script.setAttribute('data-inline-ref', 'website_widget')

    // Append the script to the DOM
    document.body.appendChild(script)
  }

  componentWillUnmount() {
    // Optional: Cleanup the script
    // ... Similar logic as in the previous example
  }

  render() {
    return (
      <div className="tt-widget">
        <div className="tt-widget-fallback">
          <p>
            <a
              href="https://www.tickettailor.com/all-tickets/forroliverpool/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
              target="_blank"
              rel="noreferrer"
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
      </div>
    )
  }
}

export default TicketTailorWidget
