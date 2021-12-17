import { Request, Response } from 'express';
import { Cat } from './cats.model';

//* READ 고양이 전체 데이터 조회
export const getAllCats = (req: Request, res: Response) => {
    try {
        const cats = Cat;
        res.status(200).send({ success: true, data: { cats } });
    } catch (error: any) {
        res.status(400).send({ success: false, error: error.message });
        console.error(error);
    }
};

//* READ 특정 고양이 데이터 조회
export const getCat = (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const cat = Cat.find((cat) => cat.id === id);

        if (cat) {
            res.status(200).send({ success: true, data: { cat } });
        } else {
            res.status(404).send({ success: true, data: {} });
        }
    } catch (error: any) {
        res.status(400).send({ success: false, error: error.message });
        console.error(error);
    }
};

//* CREATE 새로운 고양이 추가 api
export const createCat = (req: Request, res: Response) => {
    try {
        const data = req.body;

        Cat.push(data);

        res.status(200).send({ success: true, data });
    } catch (error: any) {
        res.status(400).send({ success: false, error: error.message });
        console.error(error);
    }
};

//* UPDATE 고양이 데이터 업데이트(PUT)
export const updateCat = (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const newCat = { ...req.body, id };
        Cat.forEach((cat, idx, arr) => {
            if (cat.id === id) {
                arr[idx] = newCat;
            }
        });

        res.status(200).send({ success: true, data: { Cat } });
    } catch (error: any) {
        res.status(400).send({ success: false, error: error.message });
        console.error(error);
    }
};

//* UPDATE 고양이 데이터 부분 업데이트(PATCH)
export const updateCatData = (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const newCat = { ...req.body, id };
        Cat.forEach((cat, idx, arr) => {
            if (cat.id === id) {
                arr[idx] = { ...arr[idx], ...newCat };
            }
        });

        res.status(200).send({ success: true, data: { Cat } });
    } catch (error: any) {
        res.status(400).send({ success: false, error: error.message });
        console.error(error);
    }
};

//* DELETE 고양이 데이터 삭제 api(DELETE)
export const deleteCat = (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const newCats = Cat.filter((cat) => cat.id !== id);
        res.status(200).send({ success: true, data: { newCats } });
    } catch (error: any) {
        res.status(400).send({ success: false, error: error.message });
        console.error(error);
    }
};
