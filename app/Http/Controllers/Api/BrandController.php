<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\BrandCollection;
use App\Models\Brand;
use App\Models\Product;

class BrandController extends Controller
{
    public function index()
    {
        // return new BrandCollection(Brand::orderBy('name')->get());
        $products = Product::whereNotNull('brand_id')->groupBy('brand_id')->get();
        if(!empty($products)){
            for($i=0; $i<count($products); $i++){
                $topBrands[] = $products[$i]->brand_id;
            }
        }
        return new BrandCollection(Brand::whereIn('id', $topBrands)->orderBy('name')->get());
    }
}
