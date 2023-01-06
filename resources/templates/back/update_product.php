<?php
if (isset($_GET['update_sparepart_product'])) {

    // get te target id;
    $id = $_GET['update_sparepart_product'];

    // query the database;
    $result = $conn->query("SELECT a.id, a.product_cat_id, a.product_brand_id, a.product_name, a.product_price, a.product_image, a.product_qty, a.product_desc, a.product_keywords, a.trending_product, b.brand_name, b.brand_id, c.pro_cat_title, c.pro_cat_id FROM tbl_products AS a INNER JOIN brands AS b ON a.product_brand_id=b.brand_id INNER JOIN product_categories AS c ON a.product_cat_id=c.pro_cat_id WHERE a.id='$id'");

    // get the number of rows
    $count = mysqli_num_rows($result);

    // check of the if number of rows is greater than zero;

    if ($count > 0) {
        while ($rows = $result->fetch_assoc()) {
            $id = $rows['id'];
            $product_cat_id = $rows['pro_cat_id'];
            $product_cat_title = $rows['pro_cat_title'];
            $product_brand_id = $rows['product_brand_id'];
            $product_brand_name = $rows['brand_name'];
            $product_name = $rows['product_name'];
            $product_price = $rows['product_price'];
            $current_image = $rows['product_image'];
            $product_qty = $rows['product_qty'];
            $product_desc = $rows['product_desc'];
            $product_keywords = $rows['product_keywords'];
            $trending = $rows['trending_product'];
        }
    }
}
?>
<h2 class="page-title px-0 py-4">Edit Products</h2>
<div class="row mb-5">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <form action="" method="POST" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-12  text-center"><?php display_message(); ?></div>
                <input type="hidden" name="pro_id" value="<?php echo $id; ?>" class="form-control">
                <div class="col-md-9">
                    <div class="form-group">
                        <label for="product_cat">Product Category</label>
                        <select name="product_cat_id" id="" class="form-control">
                            <option value="<?php echo isset($product_cat_id) ? $product_cat_id : ""; ?>">
                                <?php echo isset($product_cat_title) ? $product_cat_title : ""; ?>
                            </option>
                            <?php selectProductCategoriesOption(); ?>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="product_brand">Product Brand</label>
                        <select name="product_brand_id" id="" class="form-control">
                            <option value="<?php echo isset($product_brand_id) ? $product_brand_id : ""; ?>">
                                <?php echo isset($product_brand_name) ? $product_brand_name : ""; ?>
                            </option>
                            <?php selectBrandOptions(); ?>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="product_name">Product Name</label>
                        <input type="text" name="product_name" class="form-control"
                            value="<?php echo isset($product_name) ? $product_name : ""; ?>">
                    </div>

                    <div class="form-group">
                        <label for="product_price">Product Price</label>
                        <input type="text" name="product_price" class="form-control"
                            value="<?php echo isset($product_price) ? $product_price : ""; ?>">
                    </div>

                    <div class="row ">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="product_qty">Product Quantity</label>
                                <input type="number" name="product_qty" class="form-control"
                                    value="<?php echo isset($product_qty) ? $product_qty : ""; ?>">
                            </div>
                            <div class="form-group">
                                <label for="product_desc">Product Description</label>
                                <textarea name="product_desc" id="" cols="30" rows="5" class="form-control"><?php echo isset($product_desc) ? $product_desc : ""; ?>
                                </textarea>
                            </div>
                            <div class="form-group">
                                <label for="product_keywords">Product Keywords</label>
                                <textarea name="product_keywords" id="" cols="30" rows="5" class="form-control"><?php echo isset($product_keywords) ? $product_keywords : ""; ?>
                                </textarea>
                            </div>
                            <div class="form-group">
                                <label for="trending">Trending</label>
                                <input type="number" name="trending" min="0" max="1" class="form-control"
                                    value="<?php echo isset($trending) ? $trending : ""; ?>">
                            </div>

                            <div class="form-group">
                                <div>
                                    <label for="current_image">Current Image</label>
                                </div>
                                <img src="../../resources/uploads/<?php echo isset($current_image) ? $current_image : "No Image"; ?>"
                                    height="100px" width="100px">
                                <input type="hidden" name="current_image" value="<?php echo $current_image; ?>">
                            </div>

                            <div class="form-group">
                                <label for="product_image">Product Image</label>
                                <input type="file" name="product_image" class="form-control">
                            </div>

                            <!-- product button -->
                            <div class="form-group">
                                <input type="submit" name="updateSparepartProduct" class="btn btn-primary"
                                    value="Update Sparepart Details">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
<?php updateProduct(); ?>