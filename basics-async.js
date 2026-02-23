async function fetchData() {
  const apiResponse = false;

  if (!apiResponse) {
    throw new Error('No data arrived');
  }

  return apiResponse;
}

(async () => {
  try {
    const result = await fetchData();
    console.log('Success:', result);
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    console.log('Cleanup / finally arrived');
  }
})();