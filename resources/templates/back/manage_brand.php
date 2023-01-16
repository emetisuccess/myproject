<h2 class="page-title p-4">Manage Category</h2>
<div class="row justify-content-center">
    <div class="col-md-11">
        <div class="my-3">
            <div class="my-3">
                <a href="index.php?add_brand" class="btn btn-info">Add Brand</a>
            </div>
            <table class="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Brand Names</th>
                        <th colspan="2" class="pl-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $query = "SELECT * FROM brands";
                    $select_brand = mysqli_query($conn, $query);

                    while ($rows = $select_brand->fetch_assoc()) {
                        $brand_id = $rows['brand_id'];
                        $brand_name = $rows['brand_name'];

                        echo "<tr>";
                        echo "<td>{$brand_id}</td>";
                        echo "<td class='text-capitalize'>{$brand_name}</td>";
                        echo "<td>
                                    <a href='index.php?edit_brand={$brand_id}' class='text-info p-2'><i class='fa fa-edit'></i></a>
                                    <a href='/myproject-development/resources/templates/back/delete_brand.php?del_brand={$brand_id}' class='text-danger p-2'><i class='fa fa-trash'></i></a>
                                    </td>";
                        echo "</tr>";
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</div>