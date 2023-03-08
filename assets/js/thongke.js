const labels = ['Ngày 8', 'Ngày9', 'Ngày 10', 'Ngày 11', 'Ngày 12', 'Ngày 13']

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Đơn Hàng Chưa Giao',
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [10, 27, 56, 34, 24, 53],
      tension: 0.4,
    },
    {
      label: 'Đơn Hàng Đã Giao',
      backgroundColor: 'red',
      borderColor: 'red',
      data: [0, 34, 32, 23, 2, 82],
      tension: 0.4,
    },
    {
      label: 'Đơn Hủy',
      backgroundColor: 'yellow',
      borderColor: 'yellow',
      data: [0, 2, 6, 3, 2, 0],
      tension: 0.4,
    },
  ],
}
const config = {
  type: 'line',
  data: data,
}

const canvas = document.getElementById('canvas')
const chart = new Chart(canvas, config)