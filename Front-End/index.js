const sdk = new ChartsEmbedSDK({
    baseUrl: 'https://charts.mongodb.com/charts-dev-01-jwhck',
    showAttribution: false
});

const chart_01 = sdk.createChart({chartId: 'c3ed293f-804c-42b5-b956-b077d1c73260'});
const chart_02 = sdk.createChart({chartId: '683b5451-d7a5-40b1-b0ee-9fc435c2deb7'});
const chart_03 = sdk.createChart({chartId: '53b45ae9-8f48-47c2-9ea1-399781718878'});
chart_01.render(document.getElementById('chart_01'));
chart_02.render(document.getElementById('chart_02'));
chart_03.render(document.getElementById('chart_03'));

function refresh() {
    chart_01.refresh();
    chart_02.refresh();
    chart_03.refresh();
}