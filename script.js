$(document).ready(function() {
    const $infoForm = $("#infoForm");
    const $toonName = $("#toonName");
    const $featName = $("#featName");
    const $dlc = $("#dlc");
    const $webhook = $("#webhook");
   
    $infoForm.on("submit", function(event) {
      event.preventDefault();
   
      const toonName = $toonName.val();
      const featName = $featName.val();
      const dlc = $dlc.val();
      const webhook = $webhook.val();
      const webhookUrl = getWebhookUrl(webhook);
   
      const data = {
        "content": `**Who:** ${toonName}\n **Feat Name** ${featName}\n **DLC:** ${dlc}\n **Type of Run:** ${webhook}`
      };
      $.ajax({
        type: "POST",
        url: webhookUrl,
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function() {
          alert("Information submitted successfully!");
          // Clear the form after submission
          $infoForm[0].reset();
        },
        error: function() {
          alert("Failed to submit information. Please try again later.");
        }
      });
    });
   
    function getWebhookUrl(webhook) {
      const webhookUrls = {
        "duos": "https://discord.com/api/webhooks/1196233968970903582/w2XtoMvli9-FfgvG5IL6UMj0TV9NwkbeMFm2WjOCxrJFdicXgigZFVccqT3WeU2dXMtH",
        "alerts": "https://discord.com/api/webhooks/1196233968970903582/w2XtoMvli9-FfgvG5IL6UMj0TV9NwkbeMFm2WjOCxrJFdicXgigZFVccqT3WeU2dXMtH",
        "raids": "https://discord.com/api/webhooks/1196233961517621368/X_u7NpBs_wXRYXKD1vW0YODK9rjdzqplvstyBoes274YR5rr_GYYS6HZgyl15C5iLOuG",
        "openWorld": "https://discord.com/api/webhooks/1196232931442700388/VZtGkjyUv3UGCPuMPd-Hxi2qdwLxNKGRdDHtrgxPvDIL7ncllYmn3Y3HNRHOAyWqz-AF",
      };
      return webhookUrls[webhook];
    }
  });