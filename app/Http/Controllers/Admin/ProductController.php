<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use \Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        //$products = DB::table("products")->get();
        $products = Product::all();
        return view("admin.pages.products", compact("products"));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        $action = "create";
        return view("admin.pages.product", compact("action"));
    }

    public function storeUpdateHelper($action, $request, $id = 0) {
        $params = $request->all(["name", "desc", "price", "image"]);

        if (!is_null($params["image"])) {
            $imgPath = Storage::putFile("products", $request->file("image"));
            $params["image"] = $imgPath;
        } else {
            unset($params["image"]);
        }

        if ($action == "store") {
            DB::table("products")->insert($params);
        } elseif ($action == "update") {
            DB::table("products")->where("id", $id)->update($params);
        }

        return redirect()->route('products.index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function store(ProductRequest $request) {
        return $this->storeUpdateHelper("store", $request);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     */
    public function update(ProductRequest $request, $id) {
        return $this->storeUpdateHelper("update", $request, $id);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     */
    public function show($id) {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     */
    public function edit($product) {
        $productData = DB::table("products")->find($product);
        $action = "update";
        return view("admin.pages.product", compact("product", "productData", "action"));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     */
    public function destroy($id) {
        Product::find($id)->delete();
        //$product = Product::find($id);
        //Storage::delete($product->image);
        //DB::table("products")->where("id", $id)->delete();

        return redirect()->route('products.index');
    }
}
