<h2 class="page-title py-3">Manage Products</h2>
<div class="mb-4">
    <a href="index.php?add_product" class="btn btn-dark btn-md">Add Product</a>
</div>
<?php display_message(); ?>
<div>
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>SN</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price(&#8358;)</th>
                <th>Product Quantity</th>
                <th>Product Keywords</th>
                <th>Trending Product</th>
                <th>Product Description</th>
                <th colspan="2" class="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            <?php getSpareparts(); ?>
        </tbody>
    </table>
</div>