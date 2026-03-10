const recentPayments = [
    {
        studentName: "John Doe",
        grade: "Grade 10-A",
        amount: "$1,200.00",
        date: "Oct 24, 2023",
        status: "Success",
        mode: "Online",
        initials: "JD"
    },
    {
        studentName: "Sarah Smith",
        grade: "Grade 8-B",
        amount: "$850.00",
        date: "Oct 23, 2023",
        status: "Success",
        mode: "Cash",
        initials: "SS"
    },
    {
        studentName: "Mike Wilson",
        grade: "Grade 12-C",
        amount: "$2,400.00",
        date: "Oct 23, 2023",
        status: "Pending",
        mode: "Online",
        initials: "MW"
    },
    {
        studentName: "Emily White",
        grade: "Grade 9-A",
        amount: "$1,200.00",
        date: "Oct 22, 2023",
        status: "Success",
        mode: "Cash",
        initials: "EW"
    }
];

const defaulters = [
    { name: "Robert Brown", grade: "Grade 11-A", amount: "$4,500" },
    { name: "Alice Johnson", grade: "Grade 7-C", amount: "$3,200" },
    { name: "Kevin Lee", grade: "Grade 9-B", amount: "$2,850" },
    { name: "Diana Prince", grade: "Grade 10-D", amount: "$1,900" },
    { name: "Chris Evans", grade: "Grade 8-A", amount: "$1,450" }
];

function renderRecentPayments() {
    const tableBody = document.getElementById('recent-payments-table');
    if (!tableBody) return;

    tableBody.innerHTML = recentPayments.map(payment => `
        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                    <div class="size-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">${payment.initials}</div>
                    <span class="text-sm font-medium">${payment.studentName} (${payment.grade})</span>
                </div>
            </td>
            <td class="px-6 py-4 text-sm font-semibold">${payment.amount}</td>
            <td class="px-6 py-4 text-sm text-slate-500">${payment.date}</td>
            <td class="px-6 py-4">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    payment.status === 'Success'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                    : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                }">${payment.status}</span>
            </td>
            <td class="px-6 py-4 text-sm text-slate-500">${payment.mode}</td>
        </tr>
    `).join('');
}

function renderDefaulters() {
    const list = document.getElementById('defaulters-list');
    if (!list) return;

    list.innerHTML = defaulters.map(defaulter => `
        <li class="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div>
                <p class="text-sm font-semibold">${defaulter.name}</p>
                <p class="text-xs text-slate-500">${defaulter.grade}</p>
            </div>
            <span class="text-sm font-bold text-[#7B0000]">${defaulter.amount}</span>
        </li>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderRecentPayments();
    renderDefaulters();
});
