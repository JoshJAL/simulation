const API_URL = "https://100insure.com/mi/api1.php";
const API_URL_POST = "https://100insure.com/mi/api2.php";

export async function loadNumbers() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Error!", e);
  }
}

export async function postNumbers(first, second, operation) {
  const response = await fetch(API_URL_POST, {
    method: "POST",
    body: JSON.stringify({
      num1: first,
      num2: second,
      operation: operation,
    }),
  });
  const data = await response.json();
  return data;
}
