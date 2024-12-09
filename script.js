// بيانات المنتجات
const products = [
    {
        id: 1,
        name: "الأرز بجميع أنواعه",
        unit: "كيلو",
        quantity: 4500,
        price: 4.88,
        category: "food"
    },
    {
        id: 2,
        name: "المكرونة بجميع أنواعها",
        unit: "كيلو",
        quantity: 600,
        price: 9.54,
        category: "food"
    },
    // يمكنك إضافة باقي المنتجات هنا
];

// الدوال المساعدة
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;

    card.innerHTML = `
        <div class="product-header">
            <span class="product-number">${product.id}</span>
            <h3>${product.name}</h3>
        </div>
        <div class="product-details">
            <div>الوحدة: ${product.unit}</div>
            <div class="quantity-badge">الكمية: ${product.quantity}</div>
        </div>
        <div class="product-price">
            <span class="price-label">السعر الفردي:</span>
            ${product.price ? 
                `<span class="price-value">${product.price} ريال</span>` :
                `<span class="no-price">غير مسعر</span>`
            }
        </div>
    `;

    return card;
}

// تهيئة العرض
function initializeDisplay() {
    const productsGrid = document.getElementById('productsGrid');
    products.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
    });
}

// البحث
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// تصفية الفئات
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        // إزالة الفئة النشطة من جميع الأزرار
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // إضافة الفئة النشطة للزر المحدد
        button.classList.add('active');

        const category = button.dataset.category;
        const cards = document.querySelectorAll('.product-card');

        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// تهيئة العرض عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initializeDisplay);