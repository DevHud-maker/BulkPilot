import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

function featureCard(title, text, href, buttonText) {
  return (
    <s-box
      borderWidth="base"
      borderRadius="large"
      padding="large"
      background="subdued"
    >
      <s-heading>{title}</s-heading>
      <s-paragraph>{text}</s-paragraph>
      <s-link href={href}>{buttonText}</s-link>
    </s-box>
  );
}

export default function Index() {
  return (
    <s-page heading="BulkPilot">
      <s-section>
        <s-stack direction="block" gap="loose">
          <s-box
            padding="large"
            borderWidth="base"
            borderRadius="large"
            background="subdued"
          >
            <s-heading>Bulk product management for Shopify</s-heading>
            <s-paragraph>
              BulkPilot helps merchants manage store data faster with three core tools:
              Import, Export, and Bulk Edit. It is built for stores that need to update
              products, variants, inventory, tags, pricing, and customer data in less time.
            </s-paragraph>

            <s-stack direction="inline" gap="base">
              <s-link href="/app/dashboard-import">Open Import</s-link>
              <s-link href="/app/export">Open Export</s-link>
              <s-link href="/app/bulk-edit">Open Bulk Edit</s-link>
            </s-stack>
          </s-box>

          <s-box>
            <s-heading>What BulkPilot does</s-heading>
            <s-paragraph>
              BulkPilot is designed to simplify high-volume catalog operations inside Shopify.
              Instead of editing products one by one, merchants can upload files, review changes,
              export store data, and apply updates in bulk from one embedded app.
            </s-paragraph>
          </s-box>

          <s-stack direction="inline" gap="large">
            {featureCard(
              "Import",
              "Upload CSV or Excel files, map fields, preview changes before applying them, validate data, and import safely in batches.",
              "/app/dashboard-import",
              "Go to Import"
            )}

            {featureCard(
              "Export",
              "Export products and other store data to Excel, CSV, JSON, or shopping feed formats. Save presets, schedule exports, and download completed files.",
              "/app/export",
              "Go to Export"
            )}

            {featureCard(
              "Bulk Edit",
              "Edit products, variants, and customers in a spreadsheet-style interface. Update price, inventory, tags, SKU, barcode, vendor, and more.",
              "/app/bulk-edit",
              "Go to Bulk Edit"
            )}
          </s-stack>

          <s-box
            padding="large"
            borderWidth="base"
            borderRadius="large"
            background="subdued"
          >
            <s-heading>Pricing</s-heading>
            <s-paragraph>
              BulkPilot is offered as a simple monthly plan for merchants who need advanced
              catalog operations.
            </s-paragraph>
            <s-paragraph>
              <s-text fontWeight="bold">$19/month</s-text> — cancel anytime.
            </s-paragraph>
            <s-link href="/app/upgrade">View plan</s-link>
          </s-box>

          <s-box>
            <s-heading>Best for merchants who need to</s-heading>
            <s-unordered-list>
              <s-list-item>import large product catalogs</s-list-item>
              <s-list-item>export store data for reporting or backup</s-list-item>
              <s-list-item>bulk update inventory, pricing, tags, and product details</s-list-item>
              <s-list-item>reduce repetitive admin work inside Shopify</s-list-item>
            </s-unordered-list>
          </s-box>
        </s-stack>
      </s-section>

      <s-section slot="aside" heading="Quick links">
        <s-unordered-list>
          <s-list-item>
            <s-link href="/app/dashboard-import">Import</s-link>
          </s-list-item>
          <s-list-item>
            <s-link href="/app/export">Export</s-link>
          </s-list-item>
          <s-list-item>
            <s-link href="/app/bulk-edit">Bulk Edit</s-link>
          </s-list-item>
          <s-list-item>
            <s-link href="/app/upgrade">Pricing</s-link>
          </s-list-item>
        </s-unordered-list>
      </s-section>
    </s-page>
  );
}