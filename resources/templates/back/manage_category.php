<h2 class="page-title p-4">Manage Category</h2>
<div class="row justify-content-center">
    <div class="col-md-11">
        <div class="my-3">
            <div class="my-3">
                <a href="index.php?add_category" class="btn btn-info">Add Category</a>
            </div>
            <table class="table table-hover table-bordered ">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Category Name</th>
                        <th colspan="2" class="pl-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $query = "SELECT * FROM categories";
                    $select_cat = mysqli_query($conn, $query);

                    while ($rows = $select_cat->fetch_assoc()) {
                        $cat_id = $rows['cat_id'];
                        $cat_name = $rows['cat_title'];

                        echo "<tr>";
                        echo "<td>{$cat_id}</td>";
                        echo "<td class='text-capitalize'>{$cat_name}</td>";
                        echo "<td>
                                    <a href='index.php?edit_cat={$cat_id}' class='text-info p-2'><i class='fa fa-edit'></i></a>
                                    <a href='/myproject-development/resources/templates/back/delete_category.php?del_cat={$cat_id}' class='text-danger p-2'><i class='fa fa-trash'></i></a>
                                    </td>";
                        echo "</tr>";
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</div>