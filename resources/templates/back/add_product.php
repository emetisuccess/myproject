<h2 class="page-title pt-5">Add Product</h2>
<div class="col-md-12  text-center"><?php display_message(); ?></div>
<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        <form action="" method="POST" enctype="multipart/form-data">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="form-group">
                        <label for="product_title">Product Title</label>
                        <input type="text" name="product_title" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="product_description">Product Description</label>
                        <textarea type="text" rows="5" name="product_description" class="form-control"></textarea>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="product_price">Product Price</label>
                                <input type="text" name="product_price" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="trending_product">Trending Product</label>
                                <input type="text" min="0" value="0" max="1" name="trending_product"
                                    class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="product_quantity">Product Quantity</label>
                                <input type="number" name="product_quantity" min="1" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <aside id='admin_sidebar' class="col-md-4">
                    <!-- product button -->
                    <div class="form-group">
                        <input type="submit" name="draft" class="btn btn-warning " value="Draft">
                        <input type="submit" name="addProduct" class="btn btn-primary " value="Add Product">
                    </div>

                    <div class="form-group">
                        <label for="product_category">Product Category</label>
                        <select name="product_cat_id" id="" class="form-control">
                            <option value="">Select Category</option>
                            <?php selectProductCategoriesOption(); ?>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="product_brand">Product Brand</label>
                        <select name="product_brand_id" id="" class="form-control">
                            <option value="">Select Brand</option>
                            <?php selectBrandOptions(); ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="product_keywords">Product Keywords</label>
                        <textarea type="text" rows="5"
                            placeholder="Try including the product title, short description and other keywords for easy search"
                            name="product_keywords" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="product_image">Product Image</label>
                        <input type="file" name="product_image" class="form-control-file">
                    </div>
                </aside>
            </div>
        </form>
    </div>
</div>
<?php addProducts(); ?>