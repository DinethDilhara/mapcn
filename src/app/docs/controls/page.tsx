import { DocsLayout, DocsSection, DocsCode } from "../_components/docs";
import { ComponentPreview } from "../_components/component-preview";
import { CodeBlock } from "../_components/code-block";
import { MapControlsExample } from "../_components/examples/map-controls-example";
import { getExampleSource } from "@/lib/get-example-source";

const controlsPropsCode = `<MapControls
  position="bottom-right"  // "top-left" | "top-right" | "bottom-left" | "bottom-right"
  showZoom={true}          // Zoom in/out buttons
  showCompass={true}       // Reset bearing to north
  showLocate={true}        // Find user's location
  showFullscreen={true}    // Toggle fullscreen mode
  className="custom-class" // Additional CSS classes
  onLocate={(coords) => {  // Callback when location found
    console.log(coords.longitude, coords.latitude);
  }}
/>`;

export default function ControlsPage() {
  const controlsSource = getExampleSource("map-controls-example.tsx");

  return (
    <DocsLayout
      title="Map Controls"
      description="Add interactive controls to your map for zoom, compass, location, and fullscreen."
      prev={{ title: "Basic Map", href: "/docs/basic-map" }}
    >
      <DocsSection>
        <p>
          The <DocsCode>MapControls</DocsCode> component provides a set of
          interactive controls that can be positioned on any corner of the map.
        </p>
      </DocsSection>

      <ComponentPreview code={controlsSource}>
        <MapControlsExample />
      </ComponentPreview>

      <DocsSection title="Props">
        <CodeBlock code={controlsPropsCode} />
        <ul className="mt-4 space-y-2">
          <li>
            <strong>position</strong> - Where to place the controls on the map
          </li>
          <li>
            <strong>showZoom</strong> - Display zoom in/out buttons
          </li>
          <li>
            <strong>showCompass</strong> - Display compass to reset bearing
          </li>
          <li>
            <strong>showLocate</strong> - Display button to find user location
          </li>
          <li>
            <strong>showFullscreen</strong> - Display fullscreen toggle button
          </li>
          <li>
            <strong>onLocate</strong> - Callback with coordinates when location
            is found
          </li>
          <li>
            <strong>className</strong> - Additional tailwind classes to
            customize the controls
          </li>
        </ul>
      </DocsSection>
    </DocsLayout>
  );
}
